export default {
  name: "projects",
  title: "Projects",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      name: "description",
      title: "Description",
      type: "string",
    },

    {
      name: "languageUsed",
      title: "LanguagedUsed",
      type: "string",
    },
    {
      name: "projectDetails",
      title: "ProjectDetails",
      type: "blockContent",
    },
    {
      name: "codeInput",
      title: "CodeInput",
      type: "code",
    },
  ],
};
