import { Context } from "koa";
import { PassThrough } from "stream";

/**
 *  测试长连接 EventSource
 */
const sse = (stream,event, data) => {
    return stream.push(`event:${ event }\ndata: ${ JSON.stringify(data) }\n\n`)
}

export async function getMessage (context: Context) {
    
    context.status = 200
    context.set('Content-Type', "text/event-stream")
    context.set('Cache-Control', "no-cache")
    context.set('Connection', "keep-alive")
    context.set('Access-Control-Allow-Credentials', 'true');
    context.set('Access-Control-Allow-Origin', '*');

    var stream = new PassThrough()
    sse(stream,'message',{a: "yango",b: "tango"});

    // koa 中长连接必须使用 stream 流
    context.body = stream

    setInterval(()=>{
        sse(stream,'message',{a: "yango",b: Date.now()});
    },3000); 
}
