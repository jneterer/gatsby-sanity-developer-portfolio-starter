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

This starter also utilizes TailwindCSS, SCSS, and Typescript.

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
    # deploy your graphql schema
    sanity graphql deploy
    # you can optionally enable the graphql playground but this is not required
    # start your local Sanity CMS instance
    sanity start
    # go to http://localhost:3333 and login
    ```
    
    If you want to go ahead and deploy your Sanity instance, you can do the following:
    
    ```shell
    # ensure you're in the sanity-developer-portfolio directory
    sanity deploy
    # provide your studio host name, can be the same as your project name
    # once Sanity has completed deploying your studio, it will give you your production sanity url
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

## 🧐 What's inside and what you should know for this project

    .
    └── sanity-developer-portfolio
        ├── schemas
        └── sanity.json
    └── src
        ├── components
        ├── contracts
        ├── hooks
        ├── pages
        └── templates
    ├── gatsby-config.js
    └── gatsby-node.js
    
1.  **`/sanity-developer-portfolio`**: This directory contains your sanity CMS code.
    1. **`/schemas`**: This directory contains all schemas for your project, including the About, Project, and Tag schemas.
    2. **`.sanity.json`**: This file contains your sanity configuration, including your API credentials.
2.  **`/src`**: This directory contains all of the modules of code that your project depends on.

    1. **`/components`** This directory contains any components that might be reused in either a page, template, or other component.
    2. **`/contracts`** These are typescript interface contracts that define types for graphql queries to sanity, component props, etc.
    3. **`/hooks`** This directory contains any reusable `useStaticQuery` hooks to sanity.
    4. **`/pages`** This directory contains any pages that are not created programmatically in our `./gatsby-node.js` file.
    5. **`/templates`** This directory contains any templates for pages created in our `./gatsby-node.js` file.

3.  **`.gatsby-config.js`**: This is the main configuration file for a Gatsby site. In this file we define the title and description of the project and any plugins we use including Typescript (gatsby-plugin-typescript), Sanity (gatsby-source-sanity), TailwindCSS and SASS (gatsby-plugin-sass). (Check out the [config docs](https://www.gatsbyjs.org/docs/gatsby-config/) for more detail).
4.  **`.gatsby-node.js`**: This is where we build all of our project files dynamically on at build time. (Check out the docs for this file here [Gatsby Node APIs](https://www.gatsbyjs.org/docs/node-apis/)).

## 💫 Deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/gatsbyjs/gatsby-starter-default)
