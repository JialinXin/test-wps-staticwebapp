module.exports = function (context, req) {
    console.log("response connect");
    console.log(context.bindings.wpsReq.connectionContext.userId);
    context.res = { body: {"userId": context.bindings.wpsReq.connectionContext.userId} };
    context.done();
  };