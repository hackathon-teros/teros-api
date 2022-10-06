import { connect } from './database/config';
import app from './start/app';

app.listen(8080, () => {
    connect();
    console.log('server is running at http://localhost:8080 🔥');
});
