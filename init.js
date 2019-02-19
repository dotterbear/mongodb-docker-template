db = db.getSiblingDB('jobad');
db.createUser({
    user: "service-jobad-reader",
    pwd: "pass",
    roles: [
        {
            role: "readWrite",
            db: "jobad"
        }
    ]
  });

db.createIndex(
    { "title": "text", "details": "text" },
    { "name": "text_title_details_1 }
);

db.createIndex(
    { "url": 1 },
	{ unique: true, "name": "unique_url_1" }
);
