export default {
  fetch(request, env) {
    const url = new URL(request.url);

    if (url.hostname === "bafnatechinfra.com") {
      url.hostname = "www.bafnatechinfra.com";
      url.protocol = "https:";
      return Response.redirect(url.toString(), 301);
    }

    return env.ASSETS.fetch(request);
  },
};
