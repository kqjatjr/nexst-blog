import { Client } from "@notionhq/client";

const client = new Client({
  auth: process.env.NOTION_KEY,
});

async function getPosts() {
  const posts = await client.databases.query({
    database_id: `${process.env.NOTION_DATABASE}`,
  });
  return posts;
}

async function getDatabase() {
  const database = await client.databases.retrieve({
    database_id: `${process.env.NOTION_DATABASE}`,
  });

  return database;
}

async function getUser(id: string) {
  const user = await client.users.retrieve({
    user_id: id,
  });

  return user;
}

async function getPost(id: string) {
  const post = await client.pages.retrieve({
    page_id: id,
  });
  return post;
}

async function getBlocks(id: string) {
  const blocks = await client.blocks.children.list({
    block_id: id,
  });
  return blocks;
}

export { getPosts, getPost, getBlocks, getDatabase, getUser };
