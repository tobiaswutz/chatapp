import { Application, Router } from "https://deno.land/x/oak@v12.6.1/mod.ts";

const router = new Router();

router.get("/server", (ctx) => {
  console.log(ctx);
  
  const exampleArray = [ "Hello", "World", "!" ];

  ctx.response.body = { exampleArray };
});


const app = new Application();
app.use(router.routes());
app.use(router.allowedMethods());

app.listen({ port: 8080 });