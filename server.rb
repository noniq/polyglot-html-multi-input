require 'bundler/setup'
require 'sinatra'

set :views, settings.root

helpers do
  def implementations
    Dir.glob("*/component.html").map{ |f| File.dirname(f) }
  end

  def implementation
    result = params['implementation']
    halt 404 unless implementations.include?(result)
    result
  end

  def render_example
    @implementation = implementation
    @component = File.read("#{@implementation}/component.html")
    Dir.chdir(@implementation){ puts `make` }
    erb :example
  end
end

get '/' do
  @implementations = implementations
  @readme = markdown(File.read('README.md'))
  erb :index
end

get '/:implementation/' do
  @data = {
    "text1" => 'Dolor lorem ipsum …',
    "text2" => "Foo\nFoobar\nDolor lorem ipsum sit",
    "text3" => "",
  }
  render_example
end

post '/:implementation/' do
  @data = params['data']
  render_example
end

get '/:implementation/*' do
  asset = params[:splat].first
  halt 404 unless Dir.chdir(implementation){ Dir.glob("**/*").include?(asset) }
  send_file "#{implementation}/#{asset}"
end
