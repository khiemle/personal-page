import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const blogDirectory = path.join(process.cwd(), 'src/content/blog');

export async function GET() {
  try {
    const fileNames = fs.readdirSync(blogDirectory);
    const posts = fileNames
      .filter((fileName) => fileName.endsWith('.md'))
      .map((fileName) => {
        const slug = fileName.replace(/\.md$/, '');
        const fullPath = path.join(blogDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const { data } = matter(fileContents);

        return {
          slug,
          title: data.title,
          date: data.date,
          description: data.description,
          author: data.author,
        };
      });

    return NextResponse.json(posts.sort((a, b) => (a.date < b.date ? 1 : -1)));
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch posts' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { title, date, description, author, content } = body;
    const slug = title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');

    const frontmatter = `---
title: ${title}
date: '${date}'
description: '${description}'
author: '${author}'
---

${content}`;

    const filePath = path.join(blogDirectory, `${slug}.md`);
    fs.writeFileSync(filePath, frontmatter);

    return NextResponse.json({ slug });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create post' }, { status: 500 });
  }
} 