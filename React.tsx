import { Router } from "express";
import React, { FC } from "react";
import { renderToString } from "react-dom/server";
import fetch from "node-fetch";

export const router = Router();

const ReactApp: FC<{ appName: string } & GithubRepo> = ({ appName, stargazers_count }) => {
  return (
    <h1><a href="/">{appName}</a>: star {stargazers_count}</h1>
  );
}

const Html: FC = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <meta />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>ReactApp</title>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}

interface GithubRepo {
  id: number,
  node_id: string;
  name: string;
  full_name: string;
  private: boolean;
  owner:{
    login: string;
    id: number
    node_id: string;
    avatar_url: string;
    gravatar_id: string;
    url: string;
    html_url: string;
    followers_url: string;
    following_url: string;
    gists_url: string;
    starred_url: string;
    subscriptions_url: string;
    organizations_url: string;
    repos_url: string;
    events_url: string;
    received_events_url: string;
    type: string;
    site_admin:false
  },
  html_url: string;
  description:null,
  fork: boolean;
  url: string;
  forks_url: string;
  keys_url: string;
  collaborators_url: string;
  teams_url: string;
  hooks_url: string;
  issue_events_url: string;
  events_url: string;
  assignees_url: string;
  branches_url: string;
  tags_url: string;
  blobs_url: string;
  git_tags_url: string;
  git_refs_url: string;
  trees_url: string;
  statuses_url: string;
  languages_url: string;
  stargazers_url: string;
  contributors_url: string;
  subscribers_url: string;
  subscription_url: string;
  commits_url: string;
  git_commits_url: string;
  comments_url: string;
  issue_comment_url: string;
  contents_url: string;
  compare_url: string;
  merges_url: string;
  archive_url: string;
  downloads_url: string;
  issues_url: string;
  pulls_url: string;
  milestones_url: string;
  notifications_url: string;
  labels_url: string;
  releases_url: string;
  deployments_url: string;
  created_at: string;
  updated_at: string;
  pushed_at: string;
  git_url: string;
  ssh_url: string;
  clone_url: string;
  svn_url: string;
  homepage:null,
  size: number
  stargazers_count: number
  watchers_count: number
  language:null,
  has_issues:true,
  has_projects:true,
  has_downloads:true,
  has_wiki:true,
  has_pages: boolean;
  forks_count: number
  mirror_url:null,
  archived: boolean;
  disabled: boolean;
  open_issues_count: number
  license:null,
  forks: number
  open_issues: number
  watchers: number
  default_branch: string;
  temp_clone_token:null,
  network_count: number
  subscribers_count:1
}

router.get("/", async (_, res) => {
  const github = await fetch("https://api.github.com/repos/naoki-tomita/express-ssr").then(it => it.json()) as GithubRepo;
  res
    .writeHead(200, { "content-type": "text/html" })
    .end(renderToString(<Html><ReactApp appName="React app" {...github} /></Html>))
});
