export async function onRequest(context) {
  const { request } = context;
  const url = new URL(request.url);
  const hostname = url.hostname;
  const pathname = url.pathname;

  // 1. Si entra por los túneles o por el dominio de Pages, libre paso (carga el HTML original)
  if (hostname === "eeuu.cc.cd" || hostname === "otp.cc.cd" || hostname === "mydomainsquasvx.pages.dev") {
    return context.next();
  }

  // 2. Si entra por el path desde quasvx.cc.cd, redirección forzada externa
  if (pathname === "/eeuu.cc.cd" || pathname === "/eeuu.cc.cd.html") {
    return Response.redirect("https://eeuu.cc.cd", 301);
  }
  
  if (pathname === "/otp.cc.cd" || pathname === "/otp.cc.cd.html") {
    return Response.redirect("https://otp.cc.cd", 301);
  }

  return context.next();
}
