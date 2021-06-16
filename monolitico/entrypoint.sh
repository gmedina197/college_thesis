#!/bin/sh
echo "exec"
npx sequelize-cli db:migrate
npm start