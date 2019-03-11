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

db.JobAd.createIndex(
    { "title": "text", "details": "text" },
    { "name": "text_title_details_1" }
);

db.JobAd.createIndex(
    { "url": 1 },
    { unique: true, "name": "unique_url_1" }
);

db.JobAd.createIndex(
    { "companyName": 1 }
);

db.JobAd.createIndex(
    { "tags": 1 }    
);

db.JobAd.createIndex(
    { "title": 1 }
);
