import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  clientId: null, // Get this from tina.io
  token: null, // Get this from tina.io

  build: {
    outputFolder: "admin",
    publicFolder: "./",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "./",
    },
  },
  schema: {
    collections: [
      {
        name: "post",
        label: "Posts",
        path: "content/posts",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },
      {
        name: "navigation",
        label: "Nav Bar Config",
        path: "/_data",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
            // name of the data file
            include: "navigation",
        },
        format: "yaml",
        fields: [
          {
            label: "Navigation Buttons",
            name: "data",
            type: "object",
            list: true,
            ui: {
              // This allows the customization of the list item UI
              // Data can be accessed by item?.<Name of field>
              itemProps: (item) => {
                return { label: `${item?.name}`}
              },
            },
            fields: [
              {
                label: "Name",
                name: "name",
                type: "string"
              },
              {
                label: "URL",
                name: "link",
                type: "string"
              },
              {
                label: "Display Dropdown Menu",
                name:"isNameOnly",
                type: "boolean",
              },      
            ]
          },
        ],
      },
    ],
  },
});
