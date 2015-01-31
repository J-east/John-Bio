from __future__ import with_statement

from fabric.api import *
from contextlib import contextmanager as _contextmanager
from fabric.contrib import project, files

"""if this comment shows up in the server, then the deploy function works"""

# globals
staging_server = 'graham.webfactional.com'
local_user = 'johnevans'
user = 'jake'
branch_name = 'master'

# environments
def localhost():
    env.hosts = ['localhost']
    env.user = local_user
    
def run_local_server():
    """ Runs local development Django server """
    local("python manage.py runserver --settings=fc3.settings.base")

def provision_local():
    local("pip install requirements/local.txt")

def provision_staging():
    run("cd %(remote_app_dir)s; pip install requirements/staging.txt")

def provision_production():
    run("cd %(remote_app_dir)s; pip install requirements/production.txt")

def staging():
    # """get info"""
    # env.user = prompt("what is your user name as in <user>@example.webfactional.com?:")
    """use staging server"""
    env.project_name = 'jbStaging'
    env.hosts = ['johnevans.webfactional.com']
    env.remote_app_dir = '/home/johnevans/webapps/personal_staging_app/%(project_name)s' % (env)
    env.remote_apache_dir = '/home/johnevans/webapps/personal_staging_app/apache2' % (env)
    env.remote_lib_dir = '/home/johnevans/webapps/personal_staging_app/lib' % (env)
    env.activate = 'source /home/johnevans/webapps/personal_staging_app/bin/activate' % (env)
    env.branch_name = "staging"

def prod():
    env.project_name = 'johnBio'
    env.hosts = ['johnevans.webfactional.com']
    env.remote_app_dir = '/home/johnevans/webapps/personal_app/%(project_name)s' % (env)
    env.remote_apache_dir = '/home/johnevans/webapps/personal_app/apache2'
    env.remote_lib_dir = '/home/johnevans/webapps/personal_app/lib'
    env.activate = 'source /home/johnevans/webapps/personal_app/bin/activate'
    env.branch_name = "master"

# def setup():


@_contextmanager
def virtualenv():
    with cd(env.remote_app_dir+"/src/fc3"):
        with prefix(env.activate):
            yield

def deploy():
    """Deploy the site."""
    with virtualenv():
        run('git fetch --all; git reset --hard origin/%(branch_name)s' % env)
        put("johnBio/settings/secrets.py","%(remote_app_dir)s/%(project_name)s/settings" % env)
        run("python manage.py collectstatic --settings=johnBio.settings.prod")
    run("%(remote_apache_dir)s/bin/restart" % env)

def update():
    run("cd %(remote_app_dir)s; git pull origin master" % env)
    
def migrate():
    run("cd %(remote_app_dir)s; python2.7 manage.py syncdb" % env)
    run("cd %(remote_app_dir)s; python2.7 manage.py migrate" % env)
    
def restart():
    run("%(remote_apache_dir)s/bin/stop; sleep 1; %(remote_apache_dir)s/bin/start" % env)
    
def debugon():
    """Turn debug mode on for the production server."""
    run("cd %(remote_app_dir)s; sed -i -e 's/DEBUG = .*/DEBUG = True/' fc3/settings/prod.py" % env)
    restart()

def debugoff():
    """Turn debug mode off for the production server."""
    run("cd %(remote_app_dir)s; sed -i -e 's/DEBUG = .*/DEBUG = False/' fc3/settings/prod.py" % env)
    restart()