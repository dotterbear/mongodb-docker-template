db = db.getSiblingDB('service-rss-reader-dev');
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
