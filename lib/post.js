import path from "path";
import fs from "fs";
import matter from "gray-matter";

const postDirectory = path.join(process.cwd(), "posts");

// MDファイルのデータを取り出す
export function getPostsData() {
  // const fechData = await fetch("endpoint") // SSRの場合の例

  const fileNames = fs.readdirSync(postDirectory);
  const allPostsData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, ""); // 拡張子を取り除いてファイル名を取得 (Id)

    // マークダウンファイルを文字列として読み取る
    const fullPath = path.join(postDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    const matterResult = matter(fileContents);

    // idとデータを返す
    return {
      id,
      ...matterResult.data,
    };
  });
  return allPostsData;
}
