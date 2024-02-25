export function testFn() {
	return new Response(`Hello from ${process.env.VERCEL_REGION}!`)
}
