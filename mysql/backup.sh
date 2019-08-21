#!/bin/bash
NOW=$(date +"%m-%d-%Y_%H-%M")
FILE="backup-queue-$NOW.sql.gz"
FILE2="backup-api-udh-$NOW.sql.gz"
#docker exec lemp_mariadb sh -c 'exec mysqldump -uroot -p"$MYSQL_ROOT_PASSWORD" --databases $MYSQL_DATABASE' > "app/docker/mysql/backup/$FILE"
docker exec lemp_mariadb sh -c 'exec mysqldump -uroot -p"$MYSQL_ROOT_PASSWORD" --databases queue-pattani | gzip' > '/app/docker/mysql/backup/'$FILE
docker exec lemp_mariadb sh -c 'exec mysqldump -uroot -p"$MYSQL_ROOT_PASSWORD" --databases api_udh | gzip' > '/app/docker/mysql/backup/'$FILE2
echo "Backing up data complate."
