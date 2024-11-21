cd /Users/sbecker11/workspace-spa/spa-monorepo/backend
start-backend &
sleep 10
cd /Users/sbecker11/workspace-spa/spa-monorepo/frontend
start-frontend &
sleep 10
open http://localhost:8080
