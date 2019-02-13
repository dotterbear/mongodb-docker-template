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
