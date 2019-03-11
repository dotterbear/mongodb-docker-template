db = db.getSiblingDB('service-rss-reader-');
db.createUser({
    user: "service-rss-reader",
    pwd: "pass",
    roles: [
        {
            role: "readWrite",
            db: "service-rss-reader-dev"
        }
    ]
  });
