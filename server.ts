import { connect } from './src/database/config';
import app from './src/start/app';

app.listen(8080, () => {
    connect();
    console.log('server is running at http://localhost:8080 🔥');
});
