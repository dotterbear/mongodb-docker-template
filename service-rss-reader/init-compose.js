db = db.getSiblingDB('service-rss-reader-compose');
db.createUser({
    user: "service-rss-reader",
    pwd: "pass",
    roles: [
        {
            role: "readWrite",
            db: "service-rss-reader-compose"
        }
    ]
  });