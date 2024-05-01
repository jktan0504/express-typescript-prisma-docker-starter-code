# make migrate:make name=create_user_table
migrate\:make:
	npm run knex:migrate:make $(name)
