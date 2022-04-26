// dev-server.js
import 'dotenv/config';
import cli from 'next/dist/cli/next-dev';

cli.nextDev(['-p', process.env.PORT || '3000']);