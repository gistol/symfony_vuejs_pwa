<?php

namespace App\Controller;

use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Response;


class DefaultController extends Controller
{
    /**
     * @Route("/", name="default")
     */
    public function index(?string $vueRouting = null): Response
    {
        return $this->render('app.html.twig', [
            'vueRouting' => \is_null($vueRouting) ? '/' : '/' . $vueRouting
        ]);
    }

    public function pageNotFoundAction()
    {
        return $this->forward("App\Controller\DefaultController:index");
    }
}
