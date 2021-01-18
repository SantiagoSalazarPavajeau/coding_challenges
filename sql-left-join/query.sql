-- Write a SQL query for a report that provides the following information for each person in the Person table, regardless if there is an address for each of those people:




SELECT FirstNAme, LastName, City, State 
FROM Person
LEFT JOIN Address  -- LEFT JOIN BECAUSE ITS REGARDLESS IF THERE IS AN ADDRESS. ADDRESS CAN BE NULL
ON Address.PersonId=Person.PersonId;