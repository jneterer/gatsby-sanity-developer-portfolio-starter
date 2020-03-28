<!-- AUTO-GENERATED-CONTENT:START (STARTER) -->
<p align="center">
  <a href="https://www.gatsbyjs.org" target="_blank">
    <img alt="Gatsby" src="https://www.gatsbyjs.org/monogram.svg" width="60" />
  </a>
  <a href="https://www.sanity.io" target="_blank">
    <img alt="Sanity" src="https://spectrum.imgix.net/communities/3dd95226-4475-4f9a-8324-a4ac8ffdc4d5/B1Yr0X-oG-sanity_logo.png?w=256&h=256&dpr=2&auto=compress&expires=1570752000000&ixlib=js-1.3.0&s=c2d7d2718f396d50c6ae9c1be41707b0" width="60" />
  </a>
</p>
<h1 align="center">
  Gatsby + Sanity Developer Portfolio
</h1>

Get your development portfolio off the ground with this deployment-ready Gatsby + Sanity CMS Starter. This project ships with everything you need built into Gatsby and Sanity, just plug in your Sanity API credentials, commit, and deploy your Gatsby and Sanity site!

## 🚀 Quick start

These instructions assume you already have a development environment set up with Gatsby and Sanity installed. If not, please follow their set up instructions here: <a href="https://www.sanity.io/docs/getting-started-with-sanity-cli">Gatsby</a> and <a href="https://www.sanity.io/docs/getting-started-with-sanity-cli">Sanity</a>.

1.  **Clone the repository and install dependencies**

    Using the command line:
    
    ```shell
    # clone the repository
    git clone https://github.com/jneterer/gatsby-sanity-developer-portfolio.git
    # install dependencies
    cd gatsby-sanity-developer-portfolio
    npm install
    cd sanity-developer-portfolio
    npm install
    ```
    
1.  **Configure Sanity**

    Now you are going to set up your Sanity CMS and start its local instance.

    ```shell
    # ensure you're in the sanity-developer-portfolio directory
    sanity init
    # it might ask you if you want to override the existing configuration, type 'y' for yes
    # name your project
    # use the default dataset configuration: 'y' for yes
    # start your local Sanity CMS instance
    sanity start
    # go to http://localhost:3333 and login
    ```
    
1. **Create content for your porfolio**

    Here, you will create some basic content for your portfolio.

    1. Go into the **About** section
    2. Click the + sign to create a new About and fill out the fields
        1. Title - something like: "I'm a developer!"
        2. Description - provide a short bio about yourself, what you like to do, frameworks you use, etc.
        3. Main Image - this can be a self portrait or any other image you want to display in your About section
    3. Publish your new About
    4. Go to the **Tag** section
    5. Click the + sign to create a new Tag and fill out the fields
        1. Title - the title of the tag, something like: "Gatsby" or "Sanity"
        2. Description - this is a non-user facing field. Provide any description for the tag that you find helpful
        3. Selected - you can toggle this property to set whether a tag is by default selected as a filter on the home page. This should, at a minimum, be used in conjunction with the Is View All property.
        4. Is View All - defines whether a tag is the view all tag. Only one tag should have this property set to true.
    6. Publish your new Tag
    7. Go to the **Project** section
    8. Click the + sign to create a new Project and fill out the fields
        1. Title - the title of the project
        2. Slug - choose generate once having provided the title. This will create a url based on the title to /project/{slug}
        3. Description - a short description of the project. This will display on the project's card in the Projects section of the home page
        4. Body - a long description of the project. This will display on the project's page
        5. Github Url - the url to your project's github repo
        6. Site Url - the url to your project's site
        7. Main Image - a screenshot of your project. I recommend using the same size image for each project
        8. Tags - any tags associated with the project
    9. Publish your new Project
        

1.  **Configure Gatsby**

    In this section, you are going to connect your Gatsby project with your Sanity CMS.
    
    1. Rename your `.env-example` file to `.env`
    2. Replace `{your-sanity-project-id}` with your project id and `{your-dataset-name}` with your dataset name. These can both be found in the `sanity-developer-portfolio/sanity.json` file under the `api` property.
    
    3. Optional - set up Sanity draft previews in your Gatsby site
        1. Login to Sanity: <a href="https://manage.sanity.io/">Login</a>
        2. Choose your Sanity project
        3. Go to settings > API
        4. Scroll to Tokens and Add New Token
        5. Give your token a label like: "Unpublished Changes Viewer" with Read permissions and Add New Token
        6. Copy the token and replace the `{your-sanity-read-token}` with your new read token in your `.env` file
    4. Start Gatsby!
    ```shell
    gatsby develop
    ```

    Your site is now running at `http://localhost:8000`!

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql)._

## 🧐 What's inside?

A quick look at the top-level files and directories you'll see in a Gatsby project.

    .
    ├── node_modules
    ├── src
    ├── .gitignore
    ├── .prettierrc
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── gatsby-ssr.js
    ├── LICENSE
    ├── package-lock.json
    ├── package.json
    └── README.md

1.  **`/node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages) are automatically installed.

2.  **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template. `src` is a convention for “source code”.

3.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

4.  **`.prettierrc`**: This is a configuration file for [Prettier](https://prettier.io/). Prettier is a tool to help keep the formatting of your code consistent.

5.  **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://www.gatsbyjs.org/docs/browser-apis/) (if any). These allow customization/extension of default Gatsby settings affecting the browser.

6.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.org/docs/gatsby-config/) for more detail).

7.  **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.org/docs/node-apis/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.

8.  **`gatsby-ssr.js`**: This file is where Gatsby expects to find any usage of the [Gatsby server-side rendering APIs](https://www.gatsbyjs.org/docs/ssr-apis/) (if any). These allow customization of default Gatsby settings affecting server-side rendering.

9.  **`LICENSE`**: Gatsby is licensed under the MIT license.

10. **`package-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won’t change this file directly).**

11. **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

12. **`README.md`**: A text file containing useful reference information about your project.

## 🎓 Learning Gatsby

Looking for more guidance? Full documentation for Gatsby lives [on the website](https://www.gatsbyjs.org/). Here are some places to start:

- **For most developers, we recommend starting with our [in-depth tutorial for creating a site with Gatsby](https://www.gatsbyjs.org/tutorial/).** It starts with zero assumptions about your level of ability and walks through every step of the process.

- **To dive straight into code samples, head [to our documentation](https://www.gatsbyjs.org/docs/).** In particular, check out the _Guides_, _API Reference_, and _Advanced Tutorials_ sections in the sidebar.

## 💫 Deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/gatsbyjs/gatsby-starter-default)

[![Deploy with ZEIT Now](https://zeit.co/button)](https://zeit.co/import/project?template=https://github.com/gatsbyjs/gatsby-starter-default)

<!-- AUTO-GENERATED-CONTENT:END -->
