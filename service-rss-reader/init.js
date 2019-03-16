db = db.getSiblingDB('service-rss-reader-prod');
db.createUser({
    user: "service-rss-reader",
    pwd: "pass",
    roles: [
        {
            role: "readWrite",
            db: "service-rss-reader-prod"
        }
    ]
  });
