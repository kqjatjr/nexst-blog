import { Client } from "@notionhq/client";

const client = new Client({
  auth: process.env.NOTION_KEY,
});

async function getPosts() {
  const myPosts = await client.databases.query({
    database_id: `${process.env.NOTION_DATABASE}`,
  });
  return myPosts;
}

async function getDatabase() {
  const database = await client.databases.retrieve({
    database_id: `${process.env.NOTION_DATABASE}`,
  });

  return database;
}

async function getPost(id: string) {
  const myPost = await client.pages.retrieve({
    page_id: id,
  });
  return myPost;
}

async function getBlocks(id: string) {
  const myBlocks = await client.blocks.children.list({
    block_id: id,
  });
  return myBlocks;
}

export { getPosts, getPost, getBlocks, getDatabase };
