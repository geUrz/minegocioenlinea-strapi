module.exports = () => ({
  upload: {
    config: {
      provider: 'aws-s3',
      providerOptions: {
        s3Options: {
          accessKeyId: 'AKIA5Z6VK2MASHBDVQX4',
          secretAccessKey: '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',
          region: 'us-east-2',
          params: {
            ACL: 'public-read',
            signedUrlExpires: 15 * 60,
            Bucket: 'negociosseguros-strapi',
          },
        },
      },
    },
  },
});