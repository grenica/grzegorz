<?php namespace GrzegorzCzekaj\Portfolio\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateGrzegorzczekajPortfolioWorks2 extends Migration
{
    public function up()
    {
        Schema::table('grzegorzczekaj_portfolio_works', function($table)
        {
            $table->string('slug');
        });
    }
    
    public function down()
    {
        Schema::table('grzegorzczekaj_portfolio_works', function($table)
        {
            $table->dropColumn('slug');
        });
    }
}
