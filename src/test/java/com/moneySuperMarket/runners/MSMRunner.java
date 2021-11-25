package com.moneySuperMarket.runners;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        plugin = {"me.jvt.cucumber.report.PrettyReports:target",
                "json:target/cucumber.json",
                "rerun:target/rerun.txt"
                },
        features = "src/test/resources/features",
        glue = "com/moneySuperMarket/step_definitions",
        dryRun = false,
        tags = "@login"
)

public class MSMRunner {
}
