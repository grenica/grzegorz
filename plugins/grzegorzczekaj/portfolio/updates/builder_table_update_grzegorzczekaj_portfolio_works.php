<?php namespace GrzegorzCzekaj\Portfolio\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateGrzegorzczekajPortfolioWorks extends Migration
{
    public function up()
    {
        Schema::table('grzegorzczekaj_portfolio_works', function($table)
        {
            $table->string('short_info')->nullable();
            $table->string('stack')->nullable();
        });
    }
    
    public function down()
    {
        Schema::table('grzegorzczekaj_portfolio_works', function($table)
        {
            $table->dropColumn('short_info');
            $table->dropColumn('stack');
        });
    }
}
