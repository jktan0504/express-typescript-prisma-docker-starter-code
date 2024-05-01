# make migrate:make name=create_user_table
migrate\:make:
	knex --knexfile src/database/knexfile.ts migrate:make $(name)
