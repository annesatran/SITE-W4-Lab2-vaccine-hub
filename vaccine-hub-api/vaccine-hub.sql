\echo "Delete and recreate the vaccine-hub database?"
\prompt "Return for yes or ctrl-C to cancel > " answer

DROP DATABASE vaccine_hub;
CREATE DATABASE vaccine_hub;
\connect vaccine_hub;

\i vaccine-hub-schema.sql 