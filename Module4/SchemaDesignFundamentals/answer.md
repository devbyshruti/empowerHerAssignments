# Schema Design Fundamentals – Theory

## 1. What schema design is and what a database schema represents
**Schema Design** is a core backend responsibility. It is the process of planning and structuring how data will be stored in a relational database. 

A database schema represents the logical structure of the database. It answers questions such as:
- What data will be stored?
- How is the data organised?
- How are different pieces of data related to each other?

## 2. Why schema design is required before writing backend code
Schema design should be done before backend development because backend logic depends heavily on how data is stored and retrieved.
- Backend APIs perform CRUD operations based on table structure.
- Poor schema decisions later require code rewrites.
- Relationships (foreign keys) affect API logic.
- Validations at the database level reduce backend complexity.

## 3. How poor schema design impacts data consistency, maintenance, and scalability
Poor schema design creates long- term problems.

**Data Consistency Problems**
- Same data stored in multiple places.
- Updates missed in one table but applied in another.

**Maintenance Problems**
- Difficult queries
- Hard-to-understand tables
- High chances of bugs when updating data

**Scalability Problems**
- Slower queries as data grows
- Wasted storage due to repeated data
- Difficult to modify or extend the system

## 4. What validations are in schema design and why databases enforce validations 
Validations are **rules applied to database columns** to make sure only correct and meaningful data is stored.

Common validations include-
- NOT NULL - value must be present
- UNIQUE - value cannot be repeated
- DEFAULT - assigns a value if none is given
- PRIMARY KEY - uniquely identifies each records

## 5. The difference between a database schema and a database table
A **database schema** is the overall design or structure of the database.  A **databse table** is a single structure inside that schema which actually stores data.

A schema contains many tables, but a table belongs to only one schema.

## 6. Why a table should represent only one entity
Each table should represent one real-world entity to keep the database clean and logical.
**Benefits**
- Clear meaning of data
- Less duplication
- Easier updates and queries

## 7. Why redundant or derived data should be avoided in table design
Redundant data means storing the same information multiple times. Derived data is data that can be calculated from existing data.

Problems caused by redundacy:
- Inconsistent data
- Extra storage usage
- Complex updates

