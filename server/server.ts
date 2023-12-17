import { Application, Router } from "https://deno.land/x/oak/mod.ts";
import { oakCors } from "https://deno.land/x/cors/mod.ts";


const router = new Router();

let requestCount = 0;

router.get("/server", (ctx) => {
  console.log(ctx);
  
  requestCount++;

  ctx.response.body = { counter: requestCount };
});


const app = new Application();
app.use(oakCors()); // Enable CORS for All Routes
app.use(router.routes());
app.use(router.allowedMethods());

app.listen({ port: 8080 });