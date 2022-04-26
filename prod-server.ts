// prod-server.js
import 'dotenv/config';
import cli from 'next/dist/cli/next-start';

cli.nextStart(['-p', process.env.PORT || '3000']);