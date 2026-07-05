SELECT * FROM users

DELETE FROM users
   WHERE id = 2

UPDATE users
   SET admin_password = '0e7517141fb53f21ee439b355b5a1d0a'
WHERE
 name = 'noor';

 UPDATE users
   SET status = 'A'
WHERE
 name = 'noor';

 UPDATE Admins
  SET admin_password = '0e7517141fb53f21ee439b355b5a1d0a'
WHERE
 admin_first_name = 'Noor';
   
SELECT * FROM admin;

ALTER TABLE admin ALTER COLUMN admin_otp SET DEFAULT NULL;

ALTER TABLE admin 
ALTER COLUMN admin_otp TYPE TEXT USING admin_otp::TEXT;
