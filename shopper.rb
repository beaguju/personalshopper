require 'sinatra'
require 'sinatra/reloader'
require 'rubygems'

get '/' do

	erb :Personalshopper
	
end

get '/Personalshopper' do
	erb :PersonalShopper
end

get'/Nosotros' do
	erb :Nosotros
end

get '/Servicios' do
	erb :Servicios
end
	
	get '/mujeres' do
		erb :Mujeres
	end

	get '/hombres' do
		erb :Hombres
	end

	get '/eventos' do
		erb :Eventos
	end

	get '/empresas' do
		erb :Empresas
	end

	get '/shopping' do
		erb :shopping
	end

	get '/asistente' do
		erb :asistente
	end

get '/Clientes' do
	erb :Clientes
end

get '/Contacto' do
	erb :Contacto
end