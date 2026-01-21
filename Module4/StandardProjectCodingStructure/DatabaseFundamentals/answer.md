# Database Fundamentals

## 1. Why is db.json not suitable as a database for real projects? 

A `db.json` file is a **file-based storage system**, not a real database.
It is useful only for learning and small demo projects.

### Limitations of file-based storage

**Performance**
- Every read or write operation requires reading the entire file.
- As data grows, operations become very slow.

**Scalability**
- Cannot handle large amounts of data.
-  Not suitable for apllications with many users or records.

**Reliability**
- If the server crashes during a write operation, data may be lost.
- No backup, recovery, or rollback mechanisms.
