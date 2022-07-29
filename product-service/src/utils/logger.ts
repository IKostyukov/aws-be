export default function logger(event) {
  console.log(
    `Method: ${event.routeKey.split(' ')[0]},\nPath: ${event.routeKey.split(' ')[1]},\nBody: ${event.body}`
  );
}
