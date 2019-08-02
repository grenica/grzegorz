<?php namespace GrzegorzCzekaj\Portfolio\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableCreateGrzegorzczekajPortfolioWorks extends Migration
{
    public function up()
    {
        Schema::create('grzegorzczekaj_portfolio_works', function($table)
        {
            $table->engine = 'InnoDB';
            $table->increments('id');
            $table->string('name')->nullable();
            $table->text('desc')->nullable();
            $table->string('url')->nullable();
            $table->string('show')->default('1');
            $table->string('image');
            $table->timestamp('created_at')->nullable();
            $table->timestamp('updated_at')->nullable();
        });
    }
    
    public function down()
    {
        Schema::dropIfExists('grzegorzczekaj_portfolio_works');
    }
}
