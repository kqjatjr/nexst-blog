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

// 아래의 함수들은 추후 노션 api 관련 모든 글들의 컨포넌트가 완성된다면 사용
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
