# if [ $# -ne 1 ]; then
#   echo "Must specify either dev or staging."
#   exit 0;
# fi;

if [ "$1" == "dev" ]; then
  cp .env.dev .env
  npm run dev
elif [ "$1" == "staging" ]; then
  cp .env.staging .env
  npm start 
elif [ "$1" == "prod" ]; then
  cp .env.prod .env
  npm start
else
  echo "Must specify either dev, staging, or prod."
  exit 0;
fi;