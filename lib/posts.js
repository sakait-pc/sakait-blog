import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import {unified} from 'unified';
import remarkParse from 'remark-parse';
import remark2rehype from 'remark-rehype';
import rehypeExternalLinks from 'rehype-external-links'
import rehypeStringify from 'rehype-stringify';

const postsDirectory = path.join(process.cwd(), 'posts')
const EXTENSION = '.md'

const getFilePaths = (fp) => {
  const filePath = fp.slice(0, -EXTENSION.length).split(postsDirectory + path.sep);
  const filePaths = filePath[1].split(path.sep);
  return filePaths;
};

const getAllPaths = (postsDirectory) => {
  const fileNames = [];

  const recurseAllPaths = (dirPath) => {
    const allDirents = fs.readdirSync(dirPath, {withFileTypes: true});
    const filePaths = allDirents.map((dirent) => path.join(dirPath, dirent.name));
    for (const fp of filePaths) {
      if (fs.statSync(fp).isDirectory()) {
        recurseAllPaths(fp);
      } else {
        fileNames.push(getFilePaths(fp));
      }
    }
  }
  recurseAllPaths(postsDirectory);
  return fileNames;
};

export function getAllPostIds() {
  // Returns an array that looks like this:
  // [
  //   ['some', 'deep', 'path'],
  //   ['some', 'path', 'to', 'file'],
  //   ['ssg-ssr'],
  //   ['pre-rendering']
  // ]
  return getAllPaths(postsDirectory)
}

export function getSortedPostsData() {
  const fileNames = getAllPaths(postsDirectory)
  const allPostsData = fileNames.map(fileName => {
    const id = fileName.join('/')
    // Read markdown file as string
    const fileNamePath = id + EXTENSION
    const fullPath = path.join(postsDirectory, fileNamePath)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)
    // Combine the data with the id
    return {
      id,
      ...matterResult.data
    }
  })

  return allPostsData.sort((a, b) => a.date < b.date ? 1 : -1)
}

// TODO: to show the latest post
// export const latestPostSlug = getSortedPostsData()[0].id

export async function getPostData(slug) {
  const fullPath = path.join(postsDirectory, `${slug}${EXTENSION}`)
  const fileContents = fs.readFileSync(fullPath, 'utf-8')
  const matterResult = matter(fileContents)
  const processedContent = await unified()
    .use(remarkParse)
    .use(remark2rehype)
    .use(rehypeExternalLinks, {target: ['_blank'], rel: ['noopener', 'noreferrer']})
    .use(rehypeStringify)
    .process(matterResult.content);
  const contentHtml = 
  `<!-- START MoshimoAffiliateEasyLink -->
<script type="text/javascript">
(function(b,c,f,g,a,d,e){b.MoshimoAffiliateObject=a;
b[a]=b[a]||function(){arguments.currentScript=c.currentScript
||c.scripts[c.scripts.length-2];(b[a].q=b[a].q||[]).push(arguments)};
c.getElementById(a)||(d=c.createElement(f),d.src=g,
d.id=a,e=c.getElementsByTagName("body")[0],e.appendChild(d))})
(window,document,"script","//dn.msmstatic.com/site/cardlink/bundle.js?20220329","msmaflink");
msmaflink({"n":"はじめるNotion　使いかたを自由にデザインするための、基本、コツ、アイデア [ 溝口 雅子 ]","b":"","t":"","d":"https:\/\/thumbnail.image.rakuten.co.jp","c_p":"","p":["\/@0_mall\/book\/cabinet\/8999\/9784297128999.jpg"],"u":{"u":"https:\/\/item.rakuten.co.jp\/book\/17177533\/","t":"rakuten","r_v":""},"v":"2.1","b_l":[{"id":1,"u_tx":"楽天市場で見る","u_bc":"#f76956","u_url":"https:\/\/item.rakuten.co.jp\/book\/17177533\/","a_id":4823416,"p_id":54,"pl_id":27059,"pc_id":54,"s_n":"rakuten","u_so":1}],"eid":"ZThjz","s":"s"});
</script>
<div>PR</div>
<div id="msmaflink-ZThjz">リンク</div>
<!-- MoshimoAffiliateEasyLink END -->\n${processedContent.value}`;
  const historyUrl = `https://github.com/sakait-pc/sakait-blog/commits/main/posts/${encodeURIComponent(slug)}.md`;

  return {
    slug,
    contentHtml,
    historyUrl,
    ...matterResult.data
  }
}