module.exports = ({ env }) => ({
  upload: {
    provider: "cloudinary-folderoptions",
    providerOptions: {
      cloud_name: env("CLOUD_NAME"),
      api_key: env("API_KEY"),
      api_secret: env("API_SECRET"),
      default_folder: env("CLOUDINARY_DEFAULT_FOLDER"),
    },
  },
});
