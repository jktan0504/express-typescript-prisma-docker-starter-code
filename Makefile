# make migrate:make name=create_user_table
migrate\:make:
	npm run knex:migrate:make $(name)

# make seed:make name=country_seeder_table
seed\:make:
	npm run knex:seed:make $(name)

build:
	clear; docker compose up -d --build
